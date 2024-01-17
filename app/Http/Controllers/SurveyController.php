<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // TODO ADD USER SPECIFIC SURVEYS BY SURVEY RESOURCE
        return Response( Survey::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $survey = Survey::create($request);
        return Response($survey, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Survey $survey)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Survey $survey)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Survey $survey)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Survey $survey)
    {
        //
    }
}
