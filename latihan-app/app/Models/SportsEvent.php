<?php

namespace App\Models;

use Illmuinate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SportsEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_participant',
        'event_name',
        'event_date',
        'no_registrasi',
        'category',
    ];
}
