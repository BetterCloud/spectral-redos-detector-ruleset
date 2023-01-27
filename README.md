# Spectral Redos Detector Ruleset

Scan an OpenAPI document to detect possible ReDos regex patterns that are being used.

## Usage

Create a local ruleset that extends the ruleset. In its most basic form this just tells Spectral what ruleset you want to use, but it will allow you to customise things, add your own rules, turn bits off if its causing trouble.

```
cd ~/src/<your-api>
echo 'extends: ["@stoplight/spectral-owasp-ruleset"]' > .spectral.yaml
```

_If you're using VS Code or Stoplight Studio then the NPM modules will not be available. Instead you can use the GitHub url:_

```
echo 'extends: ["https://raw.githubusercontent.com/BetterCloud/spectral-redos-detector-ruleset/main/dist/ruleset.js"]' > .spectral.yaml
```

_**Note:** You need to use the raw full URL from GitHub because Spectral [cannot follow redirects through extends](https://github.com/stoplightio/spectral/issues/2266)._

Next, use Spectral CLI to lint against your OpenAPI description. Don't have any OpenAPI? [Record some HTTP traffic to make OpenAPI](https://apisyouwonthate.com/blog/creating-openapi-from-http-traffic) and then you can switch to API Design-First going forwards.

```
spectral lint api/openapi.yaml
```
