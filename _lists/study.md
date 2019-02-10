---
---

{% assign study_list = site.data.activities.studies | sort: 'year' | reverse %}

<div class="timeline disable" id="study">

    {% for year in study_list %}

		<!-- Year -->
		<div class="container left">
			<div class="content">
				<h1>{{ year.year }}</h1>
			</div>
		</div>

		{% for semester in year.semesters %}

			<!-- Semester -->
			<div class="container right">
				<div class="content">
					<h2>{{ semester.semester }}</h2>

                    <table class="competition">
						<tr>
							<th class="tb-col10">Name</th>
							<th class="tb-col30">Description</th>
						</tr>

                        {% for study in semester.lists %}

                            <!-- Study -->
                            <tr>
                                <td class="tb-col10">{{ study.name }}</td>
                                <td class="tb-col30">{{ study.description }}</td>
                            </tr>

                        {% endfor %}

                    </table>
                    
                </div>
            </div>

        {% endfor %}

    {% endfor %}
</div>