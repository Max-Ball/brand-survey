<?php

namespace App\Http\Resources;

use DateTime;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SurveyResource extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'status' => $this->status !== 'draft',
            'description' => $this->description,
            'created_at' => (new DateTime($this->created_at))->format('m-d-Y H:i'),
            'updated_at' => (new DateTime($this->updated_at))->format('m-d-Y H:i'),
            'expire_date' => (new DateTime($this->expire_date))->format('m-d-Y H:i'),
            'questions' => QuestionResource::collection($this->questions)
        ];
    }
}
