<script>
    export let data;
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
                SPRING ‘24
            </div>

            <p class="mt-1 blueText">
                LATEST ARTICLES BY OUR MEMBERS
            </p>
            
            <div class="flex gap-4 flex-wrap mt-10">
                <a href="{data.posts[0].path}" class="viewButton text-center px-10 py-5 rounded-xl">
                    MORE <br> ARCTICLES
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
    .viewButton {
        color: #F5D33D;
        background-color: #ec25a0;
        font-family: 'Archivo Black';
        font-size: calc(28px + 1.5vw);
        line-height: calc(28px + 1.5vw);
    }
    .viewButton:hover {
        color: #ec25a0;
        background-color: #F5D33D;
    }
</style>