<script>
    export let data;

    function getSeason () {
        let currentMonth = (new Date()).getMonth()
        let yearNumber = (new Date()).getFullYear()
        if (currentMonth <= 3)
            return `WINTER ‘${yearNumber}`
        else if (currentMonth <= 7)
            return `SUMMER ‘${yearNumber}`
        else
            return `FALL ‘${yearNumber}`
    }
</script>

<div class="dark w-full">

    <div class="flex h-20 ml-10">
        <div class="yellowText blockTopText my-auto">CURENT EDITION</div>
    </div>

    <div class="flex">
        <div class="flex flex-col w-1/12">
            
        </div>

        <div class="w-10/12">
            <div class="yellowText blockHeaderText">
                {getSeason()}
            </div>

            <p class="mt-1 blueText">
                LATEST ARTICLES BY OUR MEMBERS
            </p>
            
            <div class="flex gap-4 flex-wrap mt-10 items-center items-stretch">
                {#each data.posts.slice(0, 3) as post}
                <a class="articleCard w-96" href="{post.path}">
                    <div class="h-3/4 !bg-center !bg-cover" style="background: url({post.meta.cover})"></div>
                    <div class="h-1/4">
                        <p class="darkText cardTitleText pt-4 truncate">{post.meta.title}</p>
                        <p class="darkText cardText pt-2 truncate">{post.meta.author}</p>
                    </div>
                </a>
                {/each}
                <a href="{data.posts.length > 0 ? data.posts[0].path : ''}" class="flex viewButton w-96 py-10">
                    <div class="text-center m-auto">
                        MORE <br> ARTICLES
                    </div>
                </a>
            </div>
        </div>

        <div class="flex flex-col w-1/12">
            <div class="pink dot mx-auto -mb-1"/>
            <div class="pink w-0.5 mx-auto grow"/>
            <div class="pink diamond mx-auto -mt-1"/>
        </div>
    </div>

    <div class="flex w-1/6 h-20">
        <div class="pink dot my-auto -mr-1 ml-10"/>
        <div class="pink h-0.5 my-auto grow"/>
        <div class="pink diamond my-auto -ml-1"/>
    </div>
</div>

<style>
    .cardTitleText {
        font-family: 'Archivo Black';
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
    }
    .cardText {
        font-family: 'Almarai';
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
    }

    .articleCard {
        background-color: #F5D33D;
        border-left: 1vw solid #F5D33D;
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 14/10;
    }
    .articleCard:hover {
        background-color: #ec25a0;
        border-left: 1vw solid #ec25a0;
    }

    .viewButton {
        color: #F5D33D;
        background-color: #ec25a0;
        font-family: 'Archivo Black';
        font-size: calc(28px + 1.5vw);
        line-height: calc(28px + 1.5vw);
        border-radius: 10px;
    }
    .viewButton:hover {
        color: #ec25a0;
        background-color: #F5D33D;
    }
</style>