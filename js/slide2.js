if (document.body.offsetWidth > 992) {
    document.getElementById("previous_game_provider").addEventListener("click", (e) => {
        console.log("test");
        var slots_providers = document.getElementById("slots_providers");
        var width = slots_providers.offsetWidth;
        var left = slots_providers.scrollLeft;
        slots_providers.scrollLeft = left - width / 6;
    });

    document.getElementById("next_game_provider").addEventListener("click", (e) => {
        console.log("test");
        var slots_providers = document.getElementById("slots_providers");
        var width = slots_providers.offsetWidth;
        var left = slots_providers.scrollLeft;
        slots_providers.scrollLeft = left + width / 6;
    });
} else {
    document.getElementById("previous_game_provider").addEventListener("click", (e) => {
        console.log("test");
        var slots_providers = document.getElementById("slots_providers");
        var width = slots_providers.offsetWidth;
        var left = slots_providers.scrollLeft;
        slots_providers.scrollLeft = left - width / 3;
    });

    document.getElementById("next_game_provider").addEventListener("click", (e) => {
        console.log("test");
        var slots_providers = document.getElementById("slots_providers");
        var width = slots_providers.offsetWidth;
        var left = slots_providers.scrollLeft;
        slots_providers.scrollLeft = left + width / 3;
    });
}