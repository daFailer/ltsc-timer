import {
    ref,
    onMounted,
    computed
} from 'vue';
import Confetti from '../Confetti/Confetti.vue';

export default {
  name: 'CountdownTimer',
  components: {
    Confetti
  },
  setup() {
    const isFinished = ref(false);
    const now = ref(new Date());

    const timeLeft = computed(() => {
        const endTime = new Date('2024-07-04T18:30:00');
        const diff = endTime - now.value;

        if (diff <= 0) {
            isFinished.value = true;
            return '00:00:00';
        }

        const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        
        return `${hours}:${minutes}:${seconds}`;
    });

    onMounted(() => {
        setInterval(() => {
            now.value = new Date();
        }, 1000);
    });

    return {
        timeLeft,
        isFinished,
    };
  },
};