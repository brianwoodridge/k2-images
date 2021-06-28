@if ($contact_request->firstName)
<div>
    <span>Name: </span>
    {{ $contact_request->firstName }} {{ $contact_request->lastName }}
</div>
@endif
@if ($contact_request->email)
<div>
    <span>Email: </span>
    {{ $contact_request->email }}
</div>
@endif
@if ($contact_request->phoneNumber)
<div>
    <span>Phone Number: </span>
    {{ $contact_request->phoneNumber }}
</div>
@endif
@if($contact_request->sessionType)
<div>
    <span>Session Type: </span>
    {{ $contact_request->sessionType == 'other' ? $contact_request->otherSessionType : $contact_request->sessionType }}
</div>
@endif
@if ($contact_request->date)
<div>
    <span>Date: </span>
    {{ (new \Carbon\Carbon($contact_request->date))->format('m/d/Y') }}
</div>
@endif
@if($contact_request->from || $contact_request->to)
<div>
    <span>Times: </span>
    {{ $contact_request->from }} to {{ $contact_request->to }}
</div>
@endif
@if($contact_request->location)
<div>
    <span>Location: </span>
    {{ $contact_request->location }}
</div>
@endif
@if($contact_request->notes)
<div>
    <span>Notes: </span>
    {{ $contact_request->notes }}
</div>
@endif
@if($contact_request->foundVia)
<div>
    <span>How did you find me?: </span>
    {{ $contact_request->foundVia }}
</div>
@endif
