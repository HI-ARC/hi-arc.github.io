---
---

{% assign competition_list = site.data.activities.competitions.lists | sort: 'year' | reverse %}
{% assign act_list = site.data.activities.competitions.results %}

<div class="timeline disable" id="competition">

	{% for year in competition_list %}

		<!-- Year -->
		<div class="container left">
			<div class="content">
				<h1>{{ year.year }}</h1>
			</div>
		</div>

		{% for comp in year.lists %}

			<!-- Competition -->
			<div class="container right">
				<div class="content">
					<h2>{{ comp.name }}</h2>

					<table class="competition">
						<tr>
							<th class="tb-col10">Result</th>
							<th class="tb-col10">Team</th>
							<th class="tb-col20">Members</th>
						</tr>
				
						{% for act_hash in act_list %}
							{% assign act = act_hash[1] %}
				
							{% if act.year == year.year and act.competition == comp.name %}
								<tr>
									<td class="tb-col10">{{ act.result }}</td>
									<td class="tb-col10">
										{% if act.team == "" %}
											&#45;
										{% else %}
											{{ act.team }}
										{% endif %}
									</td>
									<td class="tb-col20">
										{% if act.members.size > 0 %}
											{% for member in act.members %}
												{{member}}
				
												{% unless member == act.members.last %} &#44; {% endunless %}
											{% endfor %}
										{% else %}
											&#45;
										{% endif %}
									</td>
								</tr>
							{% endif %}
						{% endfor %}
					
					</table>
				
				</div>
			</div>

		{% endfor %}

	{% endfor %}
</div>