---
---

{% assign competition_list = site.data.activities.competitions.lists %}
{% assign act_list = site.data.activities.competitions.results %}

<div class="timeline disable" id="competition">

	{% for year_list in competition_list %}

		{% for year_hash in year_list %}

			<!-- Year -->
			<div class="container left">
				<div class="content">
					<h1>{{ year_hash[0] }}</h1>
				</div>
			</div>

			{% for comp in year_hash[1] %}

				<!-- Competition -->
				<div class="container right">
					<div class="content">
						<h2>{{ comp.name }}</h2>

						<table class="competition">
							<tr>
								<th class="tb-col1">Result</th>
								<th class="tb-col2">Team</th>
								<th class="tb-col3">Members</th>
							</tr>
			
							{% for act_hash in act_list %}
								{% assign act = act_hash[1] %}
				
								{% if act.year == year_hash[0] and act.competition == comp.name %}
									<tr>
										<td class="tb-col1">{{ act.result }}</td>
										<td class="tb-col2">
											{% if act.team == "" %}
												&#45;
											{% else %}
												{{ act.team }}
											{% endif %}
										</td>
										<td class="tb-col3">
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
	{% endfor %}
</div>