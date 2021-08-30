<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>K2images</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    {{--Kallisto--}}
    <link href="https://use.typekit.net/doe2obv.css" rel="stylesheet">
    <!-- Styles -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet"/>
    @yield('styles')
</head>
<body class="antialiased">
    <header>
        <a href="{{url('/')}}"><h1 class="logo"><span id="k2">K2</span><span id="images">images</span></h1></a>
        <section id="links">
            <a href="{{ url('/') }}">Home</a>
            |
            <a href="{{ route('portfolio') }}">Portfolio</a>
            |
            <a href="{{ route('pricing') }}">Pricing</a>
            |
            <a href="{{ route('contact') }}">Contact</a>
        </section>
    </header>
    <main>
        @yield('content')
    </main>
    <footer>
        <x-contact-info/>
    </footer>
</body>
</html>
