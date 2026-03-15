const modal = document.getElementById("myModal");
        const modalImg = document.getElementById("imgDisplay");
        const modalTitle = document.getElementById("titleDisplay");
        const modalDesc = document.getElementById("descDisplay");
        const closeBtn = document.querySelector(".close");
        const galleryImages = document.querySelectorAll(".interests-img");

 galleryImages.forEach(img => {
            img.addEventListener("click", function() {
                // Open the modal
                modal.style.display = "flex";
                modalImg.src = this.src;
                modalTitle.innerText = this.alt;
                modalDesc.innerText = this.getAttribute("data-desc");
            });
        });        
closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // 4. Close if user clicks outside the white box (on the dark background)
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }