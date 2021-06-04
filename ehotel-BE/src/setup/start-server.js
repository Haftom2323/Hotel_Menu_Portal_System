// Start server
function startServer(app) {
    console.info('SETUP - Starting server..');

    const port = (process.env.PORT || 5000);
    const NODE_ENV = (process.env.NODE_ENV || 'development');

// Start server
    app.listen(port, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${port} [${NODE_ENV}]`)
        }
    });
}

module.exports = startServer;