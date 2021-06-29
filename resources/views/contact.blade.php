@extends('layouts.outer')

@section('styles')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet"/>
@endsection

@section('content')
    <div class="contact-info">
        <p>Fill out the form below or feel free to contact me directly via phone, DM, or email:</p>
        <x-contact-info/>
    </div>
    @if(isset($submit) && $submit)
        <div>Thanks for reaching out! You will hear back within 2 days.</div>
    @else
    <form method="post" action="/contact-submit">
        @csrf
        <div>
            <label for="first-name">*First Name</label>
            <input id="first-name" name="firstName" type="text" required>
        </div>
        <div>
            <label for="last-name">Last Name</label>
            <input id="last-name" name="lastName" type="text">
        </div>
        <div>
            <label for="email">*Email</label>
            <input id="email" name="email" type="email" required>
        </div>
        <div>
            <label for="phone-number">Phone Number</label>
            <input id="phone-number" name="phoneNumber" type="text">
        </div>
        <div>
            <label for="sessionType">*Session Type</label>
            <span class="options">
                <span class="radio-option">
                    <input name="sessionType" id="wedding" type="radio" value="wedding" required>
                    <label for="wedding">Wedding</label>
                </span>
                <span class="radio-option">
                    <input name="sessionType" id="engagement" type="radio" value="engagement">
                    <label for="engagement">Engagement</label>
                </span>
                <span class="radio-option">
                    <input name="sessionType" id="anniversary" type="radio" value="anniversary">
                    <label for="anniversary">Anniversary</label>
                </span>
                <span class="radio-option">
                    <input name="sessionType" id="bachelor-bachelorette" type="radio" value="bachelor/bachelorette">
                    <label for="bachelor-bachelorette">Bachelor(ette)</label>
                </span>
                <span class="radio-option">
                    <input name="sessionType" id="graduation" type="radio" value="graduation">
                    <label for="graduation">Graduation</label>
                </span>
                <span class="radio-option">
                    <input name="sessionType" id="other" type="radio" value="other">
                    <label for="other">Other: <input type="text" name="otherSessionType" placeholder="please list all applicable events"></label>
                </span>
            </span>
        </div>
        <div>
            <label for="date">Date</label>
            <input id="date" name="date" type="date">
        </div>
        <div>
            <label for="from">From</label>
            <input id="from" name="from" type="time">
        </div>
        <div>
            <label for="to">To</label>
            <input id="to" name="to" type="time">
        </div>
        <div>
            <label for="location">*Location</label>
            <textarea id="location" name="location" placeholder="Please list all locations or just the general area you'd like to shoot in and we can collaborate" required></textarea>
        </div>
        <div>
            <label for="notes">Additional Notes</label>
            <textarea id="notes" name="notes"></textarea>
        </div>
        <div>
            <label for="found-via">How did you find me?</label>
            <textarea id="found-via" name="foundVia"></textarea>
        </div>
        <input type="submit" value="submit">
    </form>
    @endif
@endsection
