const app = document.getElementById("app")
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "DJ Mike Llama",
                title: "Lease"
            },
            // NOTE: Your audio file must be served from the same domain as your HTML
            // file, or served with permissive CORS HTTP headers:
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
            url: "./media/snd/lease.mp3",
            
        },
    ]
});
webamp.renderWhenReady(app);