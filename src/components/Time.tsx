import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minutesState } from '../atoms';
function Time() {
    const [minutes, setMinutes] = useRecoilState(minutesState);
    // useRecoilState 매개변수를 selector로 받는 경우에는 첫 번째 요소는 get property로 부터 return 값
    // 두 번째 요소는 set property로 부터 return 한 값
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
    };
    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };
    return (
        <>
            <div style={{ padding: '24px' }}>
                <h2
                    style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        marginBottom: '16px',
                        paddingBottom: '8px',
                        borderBottom: '1px solid #FFF',
                    }}
                >
                    Time
                </h2>
                <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" style={{ marginRight: '24px', color: '#000' }} />
                <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" style={{ color: '#000' }} />
            </div>
        </>
    );
}

export default Time;
