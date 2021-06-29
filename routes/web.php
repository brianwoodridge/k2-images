<?php

use App\Mail\ContactForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('home');})->name('home');

Route::get('/portfolio', function () {return view('portfolio');})->name('portfolio');
Route::get('/pricing', function () {return view('pricing');})->name('pricing');
Route::get('/contact', function () {return view('contact');})->name('contact');

Route::post('/contact-submit', function (Request $request) {
    Mail::to('briantumbles@gmail.com')->send(new ContactForm($request));
    $data = ['submit' => true];
    return view('/contact', $data);
})->name('contact-post');
