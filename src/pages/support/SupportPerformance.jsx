import React from 'react'
import Performance from '../../components/Performance'
import BaseLayout from '../../components/baseLayout';

export default function SupportPerformance() {

    const supportTeamMembers = [
        { name: 'Technical Support 1' },
        { name: 'Technical Support 2' },
        { name: 'Technical Support 3' },
    ];

    return (
        <BaseLayout>
            <Performance 
                profileLabel='Technical Support Name'
                teamList={supportTeamMembers}
            />
        </BaseLayout>
    )
}


