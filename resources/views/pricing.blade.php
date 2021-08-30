@extends('layouts.outer')

@section('styles')
    <link href="{{ asset('css/form.css') }}" rel="stylesheet"/>
@endsection

@section('content')
    <h1>Pricing</h1>
    <section class="price-group">
        <span class="event">Graduation</span>
        <span class="hours">Hours: 1+</span>
        <span class="photos">Photos: 18+</span>
        <span class="cost">Cost: 95</span>
    </section>
    <section class="price-group">
        <span class="event">Family/Baby Portraits</span>
        <span class="hours">Hours: 1+</span>
        <span class="photos">Photos: 20+</span>
        <span class="cost">Cost: 145</span>
    </section>
    <section class="price-group">
        <span class="event">Engagement</span>
        <span class="hours">Hours: 2+</span>
        <span class="photos">Photos: 30+</span>
        <span class="cost">Cost: 205</span>
    </section>
    <section class="price-group">
        <span class="event">Weddings/Events</span>
        <span class="hours">Hours: 3+</span>
        <span class="photos">Photos: 30+/hr</span>
        <span class="cost">Cost: 100/hr</span>
    </section>
    <span class="note">*please note all hours, photos, and costs are approximate</span>
@endsection
