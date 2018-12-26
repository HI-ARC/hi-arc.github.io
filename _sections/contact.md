---
enable: true
sequence: 5

href: "contact"
nav-text: "contact"

heading: "연락처"
description: "Ready to start your next project with us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!"
---

<section id="{{page.href}}">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading">{{page.heading}}</h2>
                <hr class="my-4">
                <p class="mb-5">{{page.description}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 ml-auto text-center">
                <i class="fas fa-phone fa-3x mb-3 sr-contact-1"></i>
                <p>{{site.phone}}</p>
            </div>
            <div class="col-lg-4 mr-auto text-center">
                <i class="fas fa-envelope fa-3x mb-3 sr-contact-2"></i>
                <p>
                    <a href="mailto:{{site.email}}">{{site.email}}</a>
                </p>
            </div>
        </div>
    </div>
</section>