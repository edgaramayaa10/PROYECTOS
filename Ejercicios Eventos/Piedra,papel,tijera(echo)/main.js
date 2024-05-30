        
        function elegirOpcion() {
            const opciones = ["✊ Piedra", "🖐️ Papel", "✌️ Tijera"];
            const indice = Math.floor(Math.random() * opciones.length);
            return opciones[indice];
        }

        function determinarGanador(opcionUsuario, opcionComputadora) {
            if (opcionUsuario === opcionComputadora) {
                return "¡Ni pa ti ni pa la maquina!";
            } else if (
                (opcionUsuario === "✊ Piedra" && opcionComputadora === "✌️ Tijera") ||
                (opcionUsuario === "🖐️ Papel" && opcionComputadora === "✊ Piedra") ||
                (opcionUsuario === "✌️ Tijera" && opcionComputadora === "🖐️ Papel")
            ) {
                return "¡Has ganado campeon!";
            } else {
                return "¡Has perdido, sorry 😔!";
            }
        }

        function jugar(opcionUsuario) {
            const opcionComputadora = elegirOpcion();
            const resultado = determinarGanador(opcionUsuario, opcionComputadora);

            
            document.write("<h2>Has elegido: " + opcionUsuario + "</h2>");
            document.write("<h2>La maquina ha elegido: " + opcionComputadora + "</h2>");
            document.write("<h2>Resultado: " + resultado + "</h2>");
        }

        window.onload = function() {
            
            document.write('<button onclick="jugar(\'✊ Piedra\')"> Piedra ✊🏽</button>');
            document.write('<button onclick="jugar(\'🖐️ Papel\')">Papel 🤚🏽</button>');
            document.write('<button onclick="jugar(\'✌️ Tijera\')">Tijera ✌🏽</button>');
        };
