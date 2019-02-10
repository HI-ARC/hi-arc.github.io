---
---

{% assign competition_list = site.data.activities.competitions.incampus | sort: 'year' | reverse %}

<div class="timeline disable" id="incampus">

	{% for year in competition_list %}

		<!-- Year -->
		<div class="container left">
			<div class="content">
				<h1>{{ year.year }}</h1>
			</div>
		</div>

		<div class="container right">
			<div class="content">
				<h2>교내 프로그래밍 경진 대회</h2>

				<table class="competition">
					<tr>
						<th class="tb-col5">Rank</th>
						<th class="tb-col10">Prize</th>
						<th class="tb-col10">Name</th>
					</tr>

		            {% for member in year.lists %}

                        <!-- Member -->
                        <tr>
                            <td class="tb-col5">{{ member.rank }}</td>
                            <td class="tb-col10">{{ member.prize }}</td>
                            <td class="tb-col10">{{ member.name }}</td>
                        </tr>
                    {% endfor %}

                </table>

            </div>
        </div>
    
    {% endfor %}

</div>