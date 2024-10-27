<?php

namespace App\Http\Controllers;

use App\Models\SportsEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SportsEventController extends Controller
{
    // Fungsi Read: GET /api/SportEvents
    public function index()
    {
        $data = SportsEvent::all();
        return response()->json([
            'code' => 200,
            'message' => 'Success',
            'data' => $data,
        ], 200);
    }

    // Fungsi Insert: POST /api/SportEvents
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama_participant' => 'required|string|max:255',
            'event_name' => 'required|string|max:255',
            'event_date' => 'required|date',
            'no_registrasi' => 'required|string|max:5|unique:sports_events',
            'category' => 'required|in:Adult,Junior',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'code' => 400,
                'message' => 'Failed',
                'errors' => $validator->errors(),
            ], 400);
        }

        SportsEvent::create($request->all());

        return response()->json([
            'code' => 200,
            'message' => 'Success',
        ], 200);
    }
}

