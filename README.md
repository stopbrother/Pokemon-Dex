# 프로젝트 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📜pokemonLogo.png
 ┃ ┣ 📜poketball.png
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┣ 📜PokemonCard.jsx
 ┃ ┣ 📜PokemonDetail.jsx
 ┃ ┗ 📜PokemonList.jsx
 ┣ 📂context
 ┃ ┗ 📜PokemonContext.js
 ┣ 📂css
 ┃ ┣ 📜index.css
 ┃ ┗ 📜reset.css
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┣ 📜Dex.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜main.jsx
 ┗ 📜mock.js
 ```

 # 주요 기능
 ## 홈페이지
![alt text](src\readme\image.png)
"포켓몬 도감 시작하기" 버튼을 클릭하면 도감 페이지로 이동한다.

## 도감페이지
![alt text](src\readme\image-1.png)
대시보드, 포켓몬 리스트, 포켓몬 카드로 구성

## 포켓몬 디테일 페이지
![alt text](src\readme\image-2.png)
리스트에서 포켓몬 카드를 클릭하면 해당 포켓몬의 상세 정보를 보여주는 페이지로 이동

### Dashboard
![alt text](src\readme\image-3.png)
선택한 6개의 포켓몬을 표시함 "취소" 버튼을 클릭하면 해당 포켓몬 선택 해제 된다.

### PokemonList
![alt text](src\readme\image-5.png)
포켓몬 리스트를 보여줌.
"추가" 버튼을 클릭하면 해당 포켓몬이 대시보드에 추가 된다.

### PokemonCard
![alt text](src\readme\image-6.png)
각 포케몬의 이미지, 이름, 타입을 표시하고 "추가" 버튼을 제공

# Trouble Shooting
- "추가" 버튼 클릭시 이미 추가 되어있는 포켓몬이라면 "이미선택된 포켓몬 입니다." 메시지를 띄우려고 했는데 중복추가 되었다.
    - 메시지는 뜨는데 중복추가 되었다.
- Context API로 리팩토링 하는 과정에서 포켓몬 리스트, 대시보드에 추가 하는 기능이 오류가 났다.