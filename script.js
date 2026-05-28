const subscribeBtn=document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click",()=>{
    const email=document.querySelector("input").value;

    if(email.trim()===""){
        alert("Please enter your email");
        return;
    }

    alert("Subscribed Successfully");
});

/* =========================
   FEATURE CARD ANIMATION
========================= */

const observerOptions={
    threshold:0.15
};

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{
                entry.target.classList.add("is-visible");
            },index*180);

        }

    });
},observerOptions);

document.querySelectorAll(".feature-card").forEach((card)=>{
    observer.observe(card);

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        card.style.background=`
        radial-gradient(circle at ${x}px ${y}px,
        rgba(229,193,88,0.16),
        rgba(255,255,255,0.04) 45%)
        `;
    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="rgba(255,255,255,0.04)";
    });
});