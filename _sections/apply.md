---
enable: true
sequence: 4

href: "apply"
nav-text: "apply"

heading: "HI-ARC는 누구에게나 열려 있습니다!"
button: "join now"
---

<section class="bg-primary text-white" id="apply">
    <div class="container text-center">
        <h2 class="mb-4">{{page.heading}}</h2>
        <p class="mb-5">가입 신청 기한: {{site.apply-date}}</p>
        <a class="btn btn-trans btn-xl 
            {% unless site.joinable %}
                disabled
            {% endunless %}
        " href="{{site.apply-form}}">
            {{page.button}}
        </a>
    </div>
</section>