<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('SportsEvent', function (Blueprint $table) {
            $table->id();
            $table->string('nama_participant', 255);
            $table->string('event_name', 255);
            $table->date('event_date');
            $table->string('no_registrasi', 5)->unique();
            $table->enum('category',['Adult', 'Junior']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('SportsEvent');
    }
};
