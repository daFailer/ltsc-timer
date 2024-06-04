import {
    ref,
    onMounted
} from 'vue';

export default {
  name: 'Confetti',
  setup() {
    const confettiCount = 100;
    const confetti = ref([]);

    const getConfettiStyle = () => {
        const colors = ['#FF0A54', '#FF477E', '#FF7096', '#FF85A1', '#FF99AC', '#FFB3C1', '#FFCCD5'];
        const size = Math.random() * 10 + 5 + 'px';
        const left = Math.random() * 100 + '%';
        const animationDuration = Math.random() * 3 + 2 + 's';

        return {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            width: size,
            height: size,
            left,
            animationDuration,
        };
    };

    const createConfetti = () => {
      for (let i = 0; i < confettiCount; i++) {
        confetti.value.push({});
      }
    };

    onMounted(() => {
        createConfetti();
        setInterval(createConfetti, 5000); // Repeat every 5 seconds
    });

    return {
        confetti,
        getConfettiStyle,
        confettiCount
    };
  },
};