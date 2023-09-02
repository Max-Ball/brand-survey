<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;
use Throwable;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        try{
            $data = $request->validate([
                'name' => 'required|string',
                'email' => 'required|email|string|unique:users,email',
                'password' =>
                    'required',
                    'confirmed',
                    Password::min(8)->mixedCase()->numbers()->symbols()
            ]);

            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password'])
            ]);

            Auth::login($user);
            $token = $user->createToken('auth_token')->plainTextToken;


            return response([
                'user' => $user,
                'token' => $token
            ]);
        }
        catch (Throwable $ex) {
            abort(422, $ex->getMessage());
        }
    }

    public function login(Request $request) : Response
    {
        try {
            $credentials = $request->validate( [
                'email' => 'required|email|string|exists:users,email',
                'password' => [
                    'required',
                ],
                'remember' => 'boolean'
            ] );
            $remember = $credentials['remember'] ?? false;
            unset( $credentials['remember'] );

            if ( Auth::attempt( $credentials, $remember ) ) {
                $user  = Auth::user();
                Auth::login($user);
                $token = $user->createToken( 'auth_token' )->plainTextToken;

                $userData = [
                    'user'  => $user,
                    'token' => $token
                ];

                return Response($userData, 200);
            }
            return response( [
                'error' => 'The Provided credentials are not correct'
            ], 422 );
        } catch ( Throwable $ex ) {
            abort( 422, $ex->getMessage() );
        }
    }
    public function logout()
    {
        try{
            $user = Auth::user();
            $user->currentAccessToken()->delete();

            return response([
                'success' => true
            ]);
        }
        catch (Throwable $ex){
            abort(422, $ex->getMessage());
        }
    }
}
