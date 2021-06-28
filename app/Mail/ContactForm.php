<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    public $contact_request;

    /**
     * Create a new message instance.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->contact_request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): ContactForm
    {
        return $this->view('emails.contactForm')->subject('New Photography Request');
    }
}
