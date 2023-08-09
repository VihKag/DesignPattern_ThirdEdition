var Database = (function () {
    var instance;

    function createInstance() {
        var connection;

        function connect() {
            // connect to database
            connection = "Database connection";
        }

        function disconnect() {
            // disconnect from database
            connection = "Database disconnection";
        }

        function getState() {
            return connection;
        }

        return {
            connect: connect,
            disconnect: disconnect,
            getState: getState,
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();
export default Database;
