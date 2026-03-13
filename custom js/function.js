// Condition for Status

function getStatusImage(status) {
    if (status.toLowerCase() === 'open') {
        return 'assets/Open-Status.png';
    }
    return 'assets/Closed- Status .png';
}

function getBorderColor(status) {
    if (status.toLowerCase() === 'open') {
        return 'border-t-4 border-[#00A96E]';
    } else if (status.toLowerCase() === 'closed') {
        return 'border-t-4 border-[#A855F7]';
    }
}

// Condition for Priority

function getPriorityColor(priority) {
    if (priority.toLowerCase() === 'low') {
        return 'bg-gray-100 text-gray-400';
    } else if (priority.toLowerCase() === 'medium') {
        return 'bg-orange-100 text-yellow-500';
    } else if (priority.toLowerCase() === 'high') {
        return 'bg-rose-50 text-red-500';
    }
}

// Condition for Labels

function getLabel(labels) {
   return labels.map(label => {
        const labelLower = label.toLowerCase();
        if (labelLower === 'bug') {
            return `<p class="h-6 p-2 rounded-full flex justify-center items-center gap-0.5 font-medium text-xs uppercase bg-red-100 text-red-500"><i class="fa-solid fa-bug"></i> ${label}</p>`;
        } else if (labelLower === 'help wanted') {
            return `<p class="h-6 p-2 rounded-full flex justify-center items-center gap-0.5 font-medium text-xs uppercase bg-orange-100 text-orange-500"><i class="fa-solid fa-life-ring"></i> ${label}</p>`;
        } else if (labelLower === 'enhancement') {
            return `<p class="h-6 p-2 rounded-full flex justify-center items-center gap-0.5 font-medium text-xs uppercase bg-green-100 text-green-500"><i class="fa-solid fa-wand-magic-sparkles"></i> ${label}</p>`;
        } else if (labelLower === 'documentation') {
            return `<p class="h-6 p-2 rounded-full flex justify-center items-center font-medium text-xs uppercase bg-blue-100 text-blue-500"><i class="fa-solid fa-book-medical"></i> ${label}</p>`;
        } else {
            return `<p class="h-6 p-2 rounded-full flex justify-center items-center gap-0.5 font-medium text-xs uppercase bg-indigo-100 text-indigo-500"><i class="fa-solid fa-tag"></i> ${label}</p>`; 
        }
    }).join('');
}


// Single Issue Details

function loadStatus(status) {
   if (status.toLowerCase() === 'open') {
        return 'bg-[#00A96E]'
    } else if (status.toLowerCase() === 'closed') {
        return 'bg-[#A855F7]'
    }

}

function loadPriority(priority) {      
        if (priority.toLowerCase() === 'low') {
        return 'bg-green-500';
    } else if (priority.toLowerCase() === 'medium') {
        return 'bg-yellow-500';
    } else if (priority.toLowerCase() === 'high') {
        return 'bg-red-500';
    }
}


// Load Spinner

function showSpinner(state) {
    const spinner = document.getElementById('spinner');
    if (state) {
        spinner.classList.remove('hidden');
        cardsContainer.classList.add('hidden');
    } else {
        spinner.classList.add('hidden');
        cardsContainer.classList.remove('hidden');
    }
}