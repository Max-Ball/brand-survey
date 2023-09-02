<?php

namespace Database\Factories;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AnswerToQuestion>
 */
class AnswerToQuestionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'survey_question_id' => Question::all()->random()->id,
            'survey_answer_id' => Answer::all()->random()->id,
            'answer' => $this->faker->text(),
        ];
    }
}
