<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SportsEventController;

Route::get('/sports_events', [SportsEventController::class, 'index']);
Route::post('/sports_events', [SportsEventController::class, 'store']);
