import http from 'http';

export async function injectHttpInterceptor() {

    const oldEmit = http.Server.prototype.emit;

    http.Server.prototype.emit = function (...args) {

        const [type, req, res] = args;

        if(type === 'request') {

            res.setHeader('X-Instrumented-By', 'IgorMoura');

        }

        return oldEmit.apply(this, args);

    }

}