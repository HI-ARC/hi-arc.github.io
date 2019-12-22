---
---

{% assign faq_list = site.data.faqs %}
{% assign faq_size = faq_list.size | minus: 1 %}

{% comment %}
    {% for faq in faq_list %}
        {{ faq | jsonify }} <br/>
        {{ faq[0] }} <br/>
        {{ faq[1][0] | jsonify }} <br />
        {{ faq[1][0].chatroom }} <br/> <!-- 방 이름 -->
        {{ faq[1][0].chats }} <br /> <!-- 대화 내용 -->
        {% for chat in faq[1][0].chats %}
            {{ chat.speaker }} <br/> <!-- 발화자 -->
            {% for message in chat.messages %}
                {{ message }} <!-- 메시지 -->
            {% endfor %}
        {% endfor %}
        <br />
    {% endfor %}
{% endcomment %}

<div id="faq-container" class="fullscreen">
    <header id="kakao-head">
        <div id="header-text">
            <a href="/">&larr;</a> {{ site.title }} FAQ
        </div>
    </header>

    {% for faq in faq_list %}

        {% assign faq_idx = forloop.index %}

        <div class="faq pointer" data-chatroom-id="{{faq_idx}}" onclick="clickFaq({{faq_idx}})">
            <div class="icon">
                <img src="/favicon.png">
            </div>
            <div class="content">
                <div class="title">
                    {{ faq[1][0].chatroom }}
                </div>
                <div class="preview">
                    ...
                </div>
            </div>
        </div>
    {% endfor %}
</div>

<div id="chatroom-container" class="fullscreen hide">


{% for faq in faq_list %}

    {% assign faq_idx = forloop.index %}

    <div class="chatroom-{{faq_idx}} hide" data-chatroom-id="{{faq_idx}}">
        <header id="kakao-head">
            <div id="header-text">
                <a class="pointer" onclick="goBackToFaqList({{ faq_idx }})">&larr;</a>
                {{ faq[1][0].chatroom }}
            </div>
        </header>

        <div class="chatroom-content">
        {% for chat in faq[1][0].chats %}
            <div class="messages-wrapper {{ chat.speaker }}">
                <div class="icon {{ chat.speaker}}">
                    <img src="/favicon.png" />
                </div>
                <div class="messages {{ chat.speaker }}"> 
                {% for message in chat.messages %}
                    <div class="message {{chat.speaker}}">
                        <div class="speech-bubble">
                            {{ message }}
                        </div>
                    </div>
                {% endfor %}
                </div>
            </div>
        {% endfor %}
        </div>
    </div>
{% endfor %}
    {% comment %}
        {{ faq_list[0].chatroom }}
        {{ faq_list[0]}}
    {% endcomment %}

</div>