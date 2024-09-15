function startDownload() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    // Simulate a download process with a timeout
    setTimeout(() => {
        spinner.style.display = 'none';
        alert('Download Complete!');
    }, 5000); // Simulate a 5 second download
}
