import { RedisClient } from '../../../shared/redis';
import { StudentService } from './student.service';

const initStudentEvents = () => {
  RedisClient.subscribe('student.created', async (e: string) => {
    const data = JSON.parse(e);
    await StudentService.createStudentFromEvent(data);
  });
};
export default initStudentEvents;
