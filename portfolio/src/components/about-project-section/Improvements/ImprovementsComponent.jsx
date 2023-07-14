import React from "react";

const ImprovementsComponent = ({ wrongs, updates }) => {
  function toggleUpdateHandler(e) {
    const target = e.target;
    const wrongsEl = target.nextElementSibling;
    const updatesEl = wrongsEl.nextElementSibling;
    wrongsEl.classList.toggle("hide-element");
    updatesEl.classList.toggle("hide-element");
    const wrongsElisHidden = wrongsEl.classList.contains("hide-element");

    if (wrongsElisHidden) {
      wrongsEl.style.animation = "none";
      target.textContent = "BACK";
      target.style.backgroundColor = "grey";
      updatesEl.style.animation = "scaleAnimation 0.5s";
    } else {
      updatesEl.style.animation = "none";
      target.textContent = "SHOW UPDATE";
      target.style.backgroundColor = "#c7682b";
      wrongsEl.style.animation = "scaleAnimation 0.5s";
    }
  }

  return (
    <div className="portfolio__about-project-updates">
      <button
        onClick={(e) => {
          toggleUpdateHandler(e);
        }}
        className="portfolio__about-show-update-btn"
      >
        {"SHOW UPDATE"}
      </button>
      <ul
        dangerouslySetInnerHTML={{ __html: `${wrongs}` }}
        className="portfolio__about-ul portfolio__about-ul--wrongs"
      ></ul>
      <ul
        dangerouslySetInnerHTML={{ __html: `${updates}` }}
        className="portfolio__about-ul portfolio__about-ul--update hide-element"
      ></ul>
    </div>
  );
};

export default ImprovementsComponent;
