import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
	providedIn: 'root'
})
export class ControleLivrosService {
	livros: Livro[] = [
		{ codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo 1', autores: ['Autor 1', 'Autor 2'] },
		{ codigo: 20, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo 2', autores: ['Autor 3', 'Autor 4'] },
		{ codigo: 30, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo 3', autores: ['Autor 5', 'Autor 6'] },
		{ codigo: 2, codEditora: 4, titulo: 'Livro 4', resumo: 'Resumo 4', autores: ['Autor 7', 'Autor 8'] }
	];

	constructor() {
	}

	obterLivros(): Livro[] {
		return this.livros;
	}

	// Implementar o método incluir, recebendo um objeto do tipo Livro, que terá o código trocado pelo código mais alto do vetor, incrementado de um, e depois será adicionado ao vetor
	incluir(livro: Livro) {
		livro.codigo = this.maiorCodigo() + 1;
		this.livros.push(livro);		
	}

	excluir(codigo: number) {
		let index = this.livros.findIndex(livro => livro.codigo == codigo);
		if(index != -1){
			this.livros.splice(index, 1);
		}		
	}

	maiorCodigo(): number {
		return this.livros.reduce((maiorCod, livro) => livro.codigo > maiorCod ? livro.codigo : maiorCod, 0);
	}
}
