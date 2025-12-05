
    let progress = {
        diagnostic: false,
        video: false,
        woodworking: false,
        metalworking: false,
        jewelry: false,
        sewing: false,
        laser: false,
        '3dprinting': false
    };

    // Navigation functionality
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            if (section === 'workshops') {
                toggleSubNav('workshops');
            } else if (section) {
                showSection(section);
            }
        });
    });

    document.querySelectorAll('.sub-nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            if (section) {
                showSection(section);
            }
        });
    });

    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Update navigation active state
        document.querySelectorAll('.nav-item, .sub-nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active to the clicked nav item
        const activeItem = document.querySelector(`[data-section="${sectionId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }

    function toggleSubNav(id) {
        const subNav = document.getElementById(id);
        subNav.classList.toggle('active');
    }

    function submitDiagnostic() {
        alert('Assessment submitted! Proceeding to next section.');
        progress.diagnostic = true;
    }

    function completeVideo() {
        alert('Video marked as complete!');
        progress.video = true;
    }

    function showTab(module, tabName) {
        // Hide all tab contents for this module
        document.querySelectorAll(`#${module} .tab-content`).forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all tabs
        document.querySelectorAll(`#${module} .tab`).forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Show selected tab content
        document.getElementById(`${module}-${tabName}`).classList.add('active');
        
        // Add active class to clicked tab
        event.target.classList.add('active');
    }

    function showToolModal(toolName, icon) {
        const modal = document.getElementById('toolModal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `
            <h2>${toolName}</h2>
            <div class="model-3d">
                ${icon} Interactive 3D Model - ${toolName}
            </div>
            <div style="margin-top: 20px;">
                <h3>Description</h3>
                <p>This is the ${toolName}. It is an essential tool in the workshop used for various tasks. 
                The 3D model above allows you to rotate and examine the tool from all angles.</p>
                
                <h3>Safety Guidelines</h3>
                <ul style="margin-left: 20px; line-height: 1.8;">
                    <li>Always wear appropriate safety equipment</li>
                    <li>Inspect the tool before use</li>
                    <li>Follow proper handling procedures</li>
                    <li>Store properly after use</li>
                </ul>
                
                <h3>Common Uses</h3>
                <p>The ${toolName} is commonly used for precision work and is an essential part of any maker's toolkit.</p>
            </div>
        `;
        
        modal.classList.add('active');
    }

    function closeModal() {
        document.getElementById('toolModal').classList.remove('active');
    }

    function nextStep(machine, stepNum) {
        document.querySelectorAll(`#${machine}-step${stepNum - 1}`).forEach(step => {
            step.classList.remove('active');
        });
        document.getElementById(`${machine}-step${stepNum}`).classList.add('active');
    }

    function showTestEnvironment(machine) {
        alert(`Starting interactive test environment for ${machine}...`);
    }

    function submitQuiz(module) {
        alert(`Quiz submitted for ${module} module!`);
        progress[module] = true;
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('toolModal');
        if (event.target == modal) {
            closeModal();
        }
    }