// Get Elements

const cardsContainer = document.getElementById('cards-container');

const jobCounter = document.getElementById('job-count');


// Load All Issues

async function loadIssues() {

    showSpinner(true);

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
                                <p class="justify-center text-gray-800 text-sm font-semibold capitalize">
                                    ${issue.title}
                                </p>

                                <p class="text-slate-500 text-xs">
                                    ${issue.description}
                                </p>
                            </div>

                            <div class="flex justify-start items-center gap-1 flex-wrap">
                                ${getLabel(issue.labels)}
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-bl rounded-br border-t border-zinc-200">
                        <div class="flex flex-col justify-start items-start gap-2">
                            <p class="text-slate-500 text-xs">
                                #1 by ${issue.author}
                            </p>

                            <p class="text-slate-500 text-xs">
                                ${new Date(issue.createdAt).toLocaleDateString()}
                            </p>
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

    showSpinner(false);

}

loadIssues();

// Load Open Issues

async function loadOpenIssues() {

    showSpinner(true);

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
                                <p class="justify-center text-gray-800 text-sm font-semibold capitalize">
                                    ${issue.title}
                                </p>

                                <p class="text-slate-500 text-xs">
                                    ${issue.description}
                                </p>
                            </div>

                            <div class="flex justify-start items-center gap-1 flex-wrap">
                                ${getLabel(issue.labels)}
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-bl rounded-br border-t border-zinc-200">
                        <div class="flex flex-col justify-start items-start gap-2">
                            <p class="text-slate-500 text-xs">
                                #1 by ${issue.author}
                            </p>

                            <p class="text-slate-500 text-xs">
                                ${new Date(issue.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>

                `

            if (issue.status.toLowerCase() === 'open') {
                cardsContainer.appendChild(issuecard);

                // Add Counter

                jobCounter.innerText = cardsContainer.children.length;
            }


        });

    } catch (error) {
        console.log('Error fetching issues:', error);
    }

    showSpinner(false);

}

// Load Closed Issues
async function loadClosedIssues() {

    showSpinner(true);

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
                                <p class="justify-center text-gray-800 text-sm font-semibold capitalize">
                                    ${issue.title}
                                </p>

                                <p class="text-slate-500 text-xs">
                                    ${issue.description}
                                </p>
                            </div>

                            <div class="flex justify-start items-center gap-1 flex-wrap">
                                ${getLabel(issue.labels)}
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-bl rounded-br border-t border-zinc-200">
                        <div class="flex flex-col justify-start items-start gap-2">
                            <p class="text-slate-500 text-xs">
                                #1 by ${issue.author}
                            </p>

                            <p class="text-slate-500 text-xs">
                                ${new Date(issue.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>

                `

            if (issue.status.toLowerCase() === 'closed') {
                cardsContainer.appendChild(issuecard);

                // Add Counter

                jobCounter.innerText = cardsContainer.children.length;
            }


        });

    } catch (error) {
        console.log('Error fetching issues:', error);
    }

    showSpinner(false);

}
// Load Single Issue

async function loadSingleIssue(id) {
    try {
        const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
        const data = await response.json();
        const issue = data.data;

        // Get Modal Data

        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = "";

        modalContent.innerHTML = `
                <div class="flex flex-col justify-start items-start gap-2">
                    <h2 class="text-gray-800 text-2xl font-bold ">${issue.title}</h2>
                    <div class="flex justify-start items-center gap-2">
                        <p
                            class="h-6 p-2 rounded-[100px] flex justify-center items-center text-white text-xs font-medium capitalize ${loadStatus(issue.status)}">
                            ${issue.status}</p>
                        <div class="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <p class="text-slate-500 text-xs">Opened by ${issue.author}</p>
                        <div class="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <p class="text-slate-500 text-xs">${new Date(issue.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>

                <div class="flex justify-start items-center gap-1 flex-wrap">
                    ${getLabel(issue.labels)}
                </div>

                <p class="text-[#64748B]">${issue.description}</p>

                <div class="w-full p-4 bg-slate-50 rounded-lg flex justify-start items-start gap-2.5">
                    <div class="flex-1 flex flex-col justify-center items-start gap-1">
                        <p class="text-slate-500 text-base font-normal">
                            Assignee:</p>
                        <p class=" text-gray-800 text-base font-semibold">
                            ${issue.assignee || 'Unassigned'}</p>
                    </div>
                    <div class="flex-1 flex flex-col justify-center items-start gap-1">
                        <p class=" text-slate-500 text-base font-normal">
                            Priority:</p>
                            <p
                                class="py-1.5 px-3 rounded-[100px] text-center text-white text-xs font-medium uppercase ${loadPriority(issue.priority)}">
                                ${issue.priority}</p>
                    </div>
                </div>
        `

        // Show Modal

        const modal = document.getElementById('issue_details');
        modal.showModal();



    } catch (error) {
        console.log('Error fetching single issue:', error);
    }

}

// Load Serach Results

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', async function () {

    const inputValue = searchInput.value.toLowerCase().trim();

    showSpinner(true);

    try {
        const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${inputValue}`);
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
                                <p class="justify-center text-gray-800 text-sm font-semibold capitalize">
                                    ${issue.title}
                                </p>

                                <p class="text-slate-500 text-xs">
                                    ${issue.description}
                                </p>
                            </div>

                            <div class="flex justify-start items-center gap-1 flex-wrap">
                                ${getLabel(issue.labels)}
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-bl rounded-br border-t border-zinc-200">
                        <div class="flex flex-col justify-start items-start gap-2">
                            <p class="text-slate-500 text-xs">
                                #1 by ${issue.author}
                            </p>

                            <p class="text-slate-500 text-xs">
                                ${new Date(issue.createdAt).toLocaleDateString()}
                            </p>
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

    showSpinner(false);

});