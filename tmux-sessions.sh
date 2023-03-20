#!/bin/bash

set -u

SESSIONNAME=t3

tmux has-session -t $SESSIONNAME &> /dev/null

if [ $? != 0 ]; then
  tmux new-session -s $SESSIONNAME -n main -d
  tmux split-window -h "pnpm start; bash -i"
  tmux select-pane -t 0
fi

tmux attach -t $SESSIONNAME
