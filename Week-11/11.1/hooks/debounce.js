let currrentClock;

function searchBackend(){\
    console.log("Request sen to the backend");
}

function debounceSearchbackend(){
    clearTimeout(currrentClock);
    currrentClock = setTimeout(searchBackend, 30);
}

debounceSearchbackend();
debounceSearchbackend();
debounceSearchbackend();
debounceSearchbackend();
debounceSearchbackend();
debounceSearchbackend();
debounceSearchbackend();
