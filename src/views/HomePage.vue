<template>
    <main class="main-style">
        <MainHomePage />
        <AboutHomePage />
        <SkillHomePage />
        <EmploymentHomePage />
        <EducationHomePage />
        <ContactHomePage />
    </main>
</template>

<script>
import MainHomePage from "@/components/home/MainHomePage.vue"
import AboutHomePage from "@/components/home/AboutHomePage.vue"
import SkillHomePage from "@/components/home/SkillHomePage.vue"
import EmploymentHomePage from "@/components/home/EmploymentHomePage.vue"
import EducationHomePage from "@/components/home/EducationHomePage.vue"
import ContactHomePage from "@/components/home/ContectHonePage.vue"

export default {
    name: 'HomePage',
    components: {
        MainHomePage,
        AboutHomePage,
        SkillHomePage,
        EmploymentHomePage,
        EducationHomePage,
        ContactHomePage
    }
}
</script>