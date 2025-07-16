# scrap-flow

`scrap-flow` é um projeto para automação de coleta de dados web (web scraping), transformação e armazenamento eficiente dessas informações. Ele foi criado para facilitar o fluxo de extração de dados de páginas web, organizar e salvar em formatos como JSON, CSV ou bancos de dados, tornando esse processo ágil e reutilizável.

## Como funciona?

Abaixo uma animação ilustrando o processo de um scrap web: o robô coleta informações de uma página web e armazena em um banco de dados.

```svg
<svg width="600" height="280" viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="70" width="120" height="80" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
  <text x="90" y="115" font-size="20" text-anchor="middle" fill="#2563eb">Web</text>
  <text x="90" y="140" font-size="16" text-anchor="middle" fill="#2563eb">Página</text>

  <g id="robot">
    <ellipse cx="210" cy="110" rx="30" ry="25" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <rect x="195" y="135" width="30" height="30" rx="6" fill="#fbbf24" stroke="#d97706" stroke-width="3"/>
    <circle cx="200" cy="110" r="5" fill="#fff"/>
    <circle cx="220" cy="110" r="5" fill="#fff"/>
    <rect x="202" y="80" width="16" height="6" rx="2" fill="#d97706"/>
    <rect x="200" y="165" width="20" height="8" rx="4" fill="#d97706"/>
  </g>
  
  <rect x="400" y="70" width="120" height="80" rx="10" fill="#bbf7d0" stroke="#059669" stroke-width="3"/>
  <text x="460" y="115" font-size="20" text-anchor="middle" fill="#059669">Banco</text>
  <text x="460" y="140" font-size="16" text-anchor="middle" fill="#059669">de Dados</text>

  <!-- Animation: Arrow from page to robot -->
  <path id="arrow1" d="M150,110 Q180,90 210,110" stroke="#2563eb" stroke-width="4" fill="none"/>
  <polygon points="210,110 200,105 200,115" fill="#2563eb">
    <animateMotion dur="2s" repeatCount="indefinite" path="M150,110 Q180,90 210,110"/>
  </polygon>
  <text x="170" y="85" font-size="13" fill="#2563eb">Coleta</text>

  <!-- Animation: Arrow from robot to database -->
  <path id="arrow2" d="M240,120 Q320,150 400,110" stroke="#059669" stroke-width="4" fill="none"/>
  <polygon points="400,110 390,105 390,115" fill="#059669">
    <animateMotion dur="2s" repeatCount="indefinite" path="M240,120 Q320,150 400,110" begin="1s"/>
  </polygon>
  <text x="320" y="155" font-size="13" fill="#059669">Armazenamento</text>

  <!-- Robot Animation -->
  <animateTransform xlink:href="#robot" attributeName="transform" type="translate" from="0 0" to="30 10" begin="0s" dur="2s" repeatCount="indefinite"/>
</svg>
```

## Recursos principais

- **Scraping automatizado:** Extração de dados de páginas web com configuração flexível.
- **Transformação dos dados:** Limpeza, filtragem e conversão para formatos úteis (CSV, JSON etc).
- **Armazenamento:** Integração com bancos de dados, arquivos locais ou APIs.
- **Configuração modular:** Permite customizar o fluxo conforme a necessidade do projeto.

## Instalação

```bash
git clone https://github.com/franciscoaraujo/scrap-flow.git
cd scrap-flow
pip install -r requirements.txt
```

## Exemplo de uso

```python
from scrap_flow import ScrapFlow

config = 'configs/exemplo_config.yaml'
scraper = ScrapFlow(config)
scraper.run()
```

## Estrutura

- `scrap_flow/` — Módulos principais
- `configs/` — Exemplos de configuração
- `examples/` — Scripts de uso
- `tests/` — Testes automatizados

## Requisitos

- Python 3.8+
- Dependências do `requirements.txt`

## Contribua

Sugestões e melhorias são bem-vindas!  
Abra uma issue ou envie um pull request.

## Licença

MIT

---
Francisco Araújo  
[GitHub](https://github.com/franciscoaraujo)
