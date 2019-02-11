---
enable: true
sequence: 3

href: "portfolio"
nav-text: "activity"
---

{% assign acts = site.data.activities.competitions.results | sample: 6 %}

<section class="p-0" id="portfolio">
    <div class="container-fluid p-0">
        <div class="row no-gutters popup-gallery">

            {% for act_hash in acts %}
                {% assign act = act_hash[1] %}

                <div class="col-lg-4 col-sm-6">
                    <a class="portfolio-box">
                        <img width="100%" class="img-fluid" src="{{ act.picture }}" alt="{{ act.competition }}">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-name">
                                    {{ act.competition }} {{ act.result }}
                                </div>
                                <div class="project-category text-faded">
                                    {{ act.team }}

                                    {% unless act.team == "" or act.members.size == 0 %} &#124; {% endunless %}

                                    {% for member in act.members %}
                                        {{ member }}
                                    {% endfor %}
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            {% endfor %}

        </div>
    </div>
</section>
<section class="bg-dark text-white" id="portfolio-info">
    <div class="container text-center">
        <p class="text-white mb-4">더 많은 기록들</p>
        <a class="btn btn-trans btn-xl" href="./intro.html">see more</a>
    </div>
</section>
