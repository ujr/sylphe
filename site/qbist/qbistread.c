/* Read EasyQbist save file from stdin, write text to stdout
**
** EasyQbist was my old MacOS Classic implementation of J"orn
** Loviscach's Qbist image renderer. The save files were just
** the sequence of transformation parameters written to file.
**
** This tool reads such an old save file and writes JSON to
** standard output.
*/

#include <stdio.h>

#define NUM_TRAFOS 36
struct Qparam { short seq, src, ctl, dst; };

int
main()
{
  struct Qparam params[NUM_TRAFOS];  /* 36*(2+2+2+2) = 288 bytes */
  size_t r;
  int i;

  r = fread(params, sizeof(struct Qparam), NUM_TRAFOS, stdin);
  if (r != sizeof(params)) {
    fprintf(stderr, "expect %zu bytes of input, got %zu\n",
      sizeof(params), r);
    return 1;
  }

  /* Endianness: byte swap all shorts */
  for (i = 0; i < NUM_TRAFOS; i++) {
    short x = params[i].seq;
    params[i].seq = ((x&255) << 8) | (x >> 8);
    x = params[i].src;
    params[i].src = ((x&255) << 8) | (x >> 8);
    x = params[i].ctl;
    params[i].ctl = ((x&255) << 8) | (x >> 8);
    x = params[i].dst;
    params[i].dst = ((x&255) << 8) | (x >> 8);
  }

  printf("{op:[%d", params[0].seq);
  for (i = 1; i < NUM_TRAFOS; i++)
    printf(",%d", params[i].seq);
  printf("],\n src:[%d", params[0].src);
  for (i = 1; i < NUM_TRAFOS; i++)
    printf(",%d", params[i].src);
  printf("],\n ctl:[%d", params[0].ctl);
  for (i = 1; i < NUM_TRAFOS; i++)
    printf(",%d", params[i].ctl);
  printf("],\n dst:[%d", params[0].dst);
  for (i = 1; i < NUM_TRAFOS; i++)
    printf(",%d", params[i].dst);
  printf("]}\n");

  return 0;
}
