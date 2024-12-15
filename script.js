document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target"); // Τελικός αριθμός
      const count = +counter.innerText.replace(/\D/g, ""); // Τρέχων αριθμός χωρίς σύμβολα

      const increment = target / 100; // Ρυθμός αύξησης

      if (count < target) {
        const newCount = Math.ceil(count + increment); // Στρογγυλοποίηση
        counter.innerText = `+${newCount.toLocaleString("el-GR")}`; // Προσθήκη "+" και μορφοποίηση
        setTimeout(updateCounter, 50); // Καθυστέρηση 50ms
      } else {
        counter.innerText = `+${target.toLocaleString("el-GR")}`; // Βεβαιώσου ότι φτάνει στο σωστό αριθμό
      }
    };

    updateCounter();
  });
});