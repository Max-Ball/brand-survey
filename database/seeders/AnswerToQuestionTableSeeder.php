<?php

namespace Database\Seeders;

use App\Models\AnswerToQuestion;
use Illuminate\Database\Seeder;

class AnswerToQuestionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AnswerToQuestion::factory()->count(20)->create();
    }
}
