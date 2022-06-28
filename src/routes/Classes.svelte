<script>
    import Nav from "./Nav.svelte";
    import ClassesPageheader from "./ClassesPageHeader.svelte";
    import Foot from "./Foot.svelte";
</script>
<Nav />
<ClassesPageheader />
<section class="scroll-smooth h-auto dark:bg-white bg-zinc-800 text-white dark:text-zinc-800 text-center pt-12">
   <div class="container max-w-7xl mx-auto ">
    <div class="grid overflow-hidden grid-cols-2 grid-rows-2 gap-6 grid-flow-row justify-center">
        <div class="box"><h1 class="font-medium text-3xl overflow-hidden" style="font-family:renfrew;">Caboolture</h1><br/><p>Tuesday: 5:30pm - 7:00pm</p><br/><p>Thursday: 5:30pm - 7:00pm</p></div>
        <div class="box"><h1 class="font-medium text-3xl overflow-hidden" style="font-family:renfrew;">Burpengary</h1><br/><p>Tuesday: 5:00pm - 6:00pm</p></div>
        <div class="box col-span-2 font-medium text-3xl" style="font-family:renfrew;">More Coming Soon...</div>
    </div>
</div>
    
</section>
<Foot />