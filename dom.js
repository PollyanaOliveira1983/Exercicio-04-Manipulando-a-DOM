

var atual_state = 'Desligada';

    function mudaEstado() {
        atual_state === 'Desligada' ? atual_state = 'LIGADA' : atual_state = 'Desligada';
        return atual_state;
    }

    function ligaDesliga() {

        if (atual_state === 'Desligada')
            document.getElementById('lampada').src = 'lampada-acesa-png.png';
        else
            document.getElementById('lampada').src = 'lampada-apagada-png.png';


        mudaEstado();

    }

