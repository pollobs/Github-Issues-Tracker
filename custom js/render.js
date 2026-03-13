// Get Elements

const cardsContainer = document.getElementById('cards-container');

const jobCounter = document.getElementById('job-count');


// Load All Issues

async function loadIssues() {
    try {
        const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues');
        const data = await response.json();

        cardsContainer.innerHTML = '';

        data.data.forEach(issue => {

            // Render Cards
            const issuecard = document.createElement('div');
            issuecard.innerHTML = `
            <div id="issue-card" class="inline-flex flex-col bg-white rounded shadow-[0px_3px_6px_0px_rgba(0,0,0,0.08)] ${getBorderColor(issue.status)}" onclick="loadSingleIssue(${issue.id})">
                    <div class="flex flex-col justify-start items-start gap-3 p-4 rounded-tl rounded-tr">
                        <div class="w-full flex justify-between items-center">
                            <div class="w-6 h-6 relative">
                                <img src="${getStatusImage(issue.status)}" alt="${issue.status}">
                            </div>

                            <p class="w-20 h-6 p-2 rounded-full flex justify-center items-center font-medium text-xs uppercase ${getPriorityColor(issue.priority)}">${issue.priority}</p>
                        </div>

                        <div class="flex flex-col justify-start items-start gap-3 w-full">
                            <div class="flex flex-col justify-start items-start gap-2 w-full">
                                <div class="justify-center text-gray-800 text-sm font-semibold capitalize">
                                    ${issue.title}
                                </div>

                                <div class="text-slate-500 text-xs">
                                    ${issue.description}
                                </div>
                            </div>

                            <div class="flex justify-start items-center gap-1 flex-wrap">
                                ${getLabel(issue.labels)}
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-bl rounded-br border-t border-zinc-200">
                        <div class="flex flex-col justify-start items-start gap-2">
                            <div class="text-slate-500 text-xs">
                                #1 by ${issue.author}
                            </div>

                            <div class="text-slate-500 text-xs">
                                ${new Date(issue.createdAt).toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>

                `

            cardsContainer.appendChild(issuecard);

            // Add Counter

            jobCounter.innerText = cardsContainer.children.length;
        });

    } catch (error) {
        console.log('Error fetching issues:', error);
    }

}

loadIssues();


// Load Single Issue

async function loadSingleIssue(id) {
    try {
        const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        const data = await response.json();

        // Show Modal

        const modal = document.getElementById('issue_details');
        modal.showModal();

        

    } catch (error) {
        console.log('Error fetching single issue:', error);
    }

}